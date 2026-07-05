-- Enable the pgvector extension to work with embedding vectors
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE websites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  domain TEXT NOT NULL,
  niche TEXT,
  status TEXT DEFAULT 'active',
  github_repo TEXT,
  cms_type TEXT,
  telegram_bot_token_ref TEXT,
  telegram_owner_chat_id TEXT,
  facebook_page_id TEXT,
  search_console_property TEXT,
  indexnow_key TEXT,
  brand_rules JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  name TEXT NOT NULL,
  system_prompt TEXT NOT NULL,
  permissions JSONB DEFAULT '{}',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  parent_task_id UUID REFERENCES tasks(id),
  assigned_agent_id UUID REFERENCES agents(id),
  created_by TEXT,
  title TEXT NOT NULL,
  description TEXT,
  task_type TEXT,
  priority TEXT DEFAULT 'medium',
  status TEXT DEFAULT 'queued',
  risk_level TEXT DEFAULT 'low',
  needs_approval BOOLEAN DEFAULT false,
  input JSONB DEFAULT '{}',
  output JSONB DEFAULT '{}',
  error TEXT,
  due_at TIMESTAMPTZ,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE approvals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL,
  risk_level TEXT NOT NULL,
  proposed_action JSONB NOT NULL,
  summary TEXT,
  status TEXT DEFAULT 'pending',
  approved_by TEXT,
  approved_at TIMESTAMPTZ,
  rejected_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE knowledge_base (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT,
  content TEXT NOT NULL,
  source_url TEXT,
  embedding VECTOR(1536),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE content_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT,
  slug TEXT,
  status TEXT DEFAULT 'draft',
  meta_title TEXT,
  meta_description TEXT,
  content_summary TEXT,
  last_audited_at TIMESTAMPTZ,
  last_updated_at TIMESTAMPTZ,
  index_status TEXT,
  search_console_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE social_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  platform TEXT NOT NULL,
  content TEXT NOT NULL,
  target_url TEXT,
  status TEXT DEFAULT 'draft',
  risk_level TEXT DEFAULT 'low',
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  external_post_id TEXT,
  engagement_data JSONB DEFAULT '{}',
  created_by_agent_id UUID REFERENCES agents(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE telegram_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  telegram_user_id TEXT,
  telegram_chat_id TEXT,
  username TEXT,
  user_message TEXT NOT NULL,
  ai_reply TEXT,
  status TEXT DEFAULT 'received',
  escalation_reason TEXT,
  raw_update JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
  report_type TEXT NOT NULL,
  generated_by_agent_id UUID REFERENCES agents(id),
  summary TEXT NOT NULL,
  recommendations JSONB DEFAULT '[]',
  issues JSONB DEFAULT '[]',
  needs_owner_approval JSONB DEFAULT '[]',
  raw_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE agent_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  agent_id UUID REFERENCES agents(id),
  status TEXT DEFAULT 'running',
  input JSONB DEFAULT '{}',
  output JSONB DEFAULT '{}',
  tool_calls JSONB DEFAULT '[]',
  error TEXT,
  started_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ
);
