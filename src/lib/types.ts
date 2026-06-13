export interface CompanySettings {
  id: string;
  company_id: string;
  app_name: string | null;
  company_name: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  primary_color: string | null;
  secondary_color: string | null;
  whatsapp: string | null;
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  website: string | null;
  previsita_url: string | null;
  loyalty_program_name: string | null;
  wallet_name: string | null;
  points_name: string | null;
  welcome_message: string | null;
  mattress_rotation_interval_days: number | null;
  reminder_days_before: number | null;
  support_email: string | null;
  support_phone: string | null;
  privacy_policy_url: string | null;
  terms_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
