'use client';

import { ModuleKey } from './modules';

// Feature Flag Types
export type FeatureFlagKey =
  | 'enable_whatsapp_button'
  | 'enable_exit_popup'
  | 'enable_countdown_timer'
  | 'enable_video_section'
  | 'enable_gallery_section'
  | 'enable_reviews_section'
  | 'enable_ai_assistant'
  | 'enable_advanced_analytics'
  | 'enable_loyalty_program'
  | 'enable_white_label_theme'
  | 'enable_custom_domain'
  | 'enable_client_app'
  | 'enable_notifications'
  | 'enable_documents'
  | 'enable_warranty_tracking';

export type FeatureFlagContext = 'super_admin' | 'empresa' | 'cliente';

export interface FeatureFlag {
  key: FeatureFlagKey;
  name: string;
  description: string;
  category: 'ui' | 'marketing' | 'features' | 'analytics' | 'design' | 'operations';
  context: FeatureFlagContext[];
  isActiveByDefault: boolean;
  relatedModule?: ModuleKey;
  dependencies?: FeatureFlagKey[];
  permissions?: string[];
  plan?: string;
}

// Default Feature Flags Config
export const defaultFeatureFlags: FeatureFlag[] = [
  {
    key: 'enable_whatsapp_button',
    name: 'Botão WhatsApp',
    description: 'Ativar botão de contato via WhatsApp',
    category: 'ui',
    context: ['empresa'],
    isActiveByDefault: true
  },
  {
    key: 'enable_exit_popup',
    name: 'Popup de Saída',
    description: 'Mostrar popup quando o usuário tenta sair',
    category: 'marketing',
    context: ['empresa'],
    isActiveByDefault: false
  },
  {
    key: 'enable_countdown_timer',
    name: 'Contador Regressivo',
    description: 'Ativar contador de tempo para promoções',
    category: 'marketing',
    context: ['empresa'],
    isActiveByDefault: false
  },
  {
    key: 'enable_video_section',
    name: 'Seção de Vídeo',
    description: 'Mostrar seção de vídeos',
    category: 'ui',
    context: ['empresa'],
    isActiveByDefault: true
  },
  {
    key: 'enable_gallery_section',
    name: 'Galeria',
    description: 'Ativar galeria de fotos',
    category: 'ui',
    context: ['empresa'],
    isActiveByDefault: true
  },
  {
    key: 'enable_reviews_section',
    name: 'Avaliações',
    description: 'Mostrar seção de avaliações de clientes',
    category: 'ui',
    context: ['empresa'],
    isActiveByDefault: true
  },
  {
    key: 'enable_ai_assistant',
    name: 'Assistente IA',
    description: 'Ativar assistente de inteligência artificial',
    category: 'features',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: false
  },
  {
    key: 'enable_advanced_analytics',
    name: 'Analytics Avançado',
    description: 'Relatórios e análises detalhadas',
    category: 'analytics',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: false,
    relatedModule: 'analytics'
  },
  {
    key: 'enable_loyalty_program',
    name: 'Programa Fidelidade',
    description: 'Ativar programa de pontos',
    category: 'features',
    context: ['empresa'],
    isActiveByDefault: true,
    relatedModule: 'programa_fidelidade'
  },
  {
    key: 'enable_white_label_theme',
    name: 'Tema White Label',
    description: 'Permitir personalização total do tema',
    category: 'design',
    context: ['empresa'],
    isActiveByDefault: true,
    relatedModule: 'white_label'
  },
  {
    key: 'enable_custom_domain',
    name: 'Domínio Personalizado',
    description: 'Permitir uso de domínio próprio',
    category: 'design',
    context: ['empresa'],
    isActiveByDefault: false
  },
  {
    key: 'enable_client_app',
    name: 'App Cliente',
    description: 'Acesso ao aplicativo para clientes',
    category: 'features',
    context: ['cliente'],
    isActiveByDefault: true,
    relatedModule: 'app_cliente'
  },
  {
    key: 'enable_notifications',
    name: 'Notificações',
    description: 'Envio de notificações',
    category: 'operations',
    context: ['super_admin', 'empresa'],
    isActiveByDefault: false,
    relatedModule: 'notificacoes'
  },
  {
    key: 'enable_documents',
    name: 'Documentos',
    description: 'Armazenamento de documentos',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    relatedModule: 'documentos'
  },
  {
    key: 'enable_warranty_tracking',
    name: 'Rastreamento de Garantia',
    description: 'Controle detalhado de garantias',
    category: 'operations',
    context: ['empresa'],
    isActiveByDefault: true,
    relatedModule: 'garantias'
  }
];

// Helper functions
export function getFeatureFlags(
  context?: FeatureFlagContext,
  isActiveFn?: (flag: FeatureFlag) => boolean
): FeatureFlag[] {
  let flags = [...defaultFeatureFlags];
  
  if (context) {
    flags = flags.filter(flag => flag.context.includes(context));
  }
  
  if (isActiveFn) {
    flags = flags.filter(isActiveFn);
  }
  
  return flags;
}

export function isFeatureFlagActive(
  key: FeatureFlagKey,
  activeFlags?: FeatureFlagKey[]
): boolean {
  const flag = defaultFeatureFlags.find(f => f.key === key);
  if (!flag) return false;
  if (!activeFlags) return flag.isActiveByDefault;
  return activeFlags.includes(key) || flag.isActiveByDefault;
}
