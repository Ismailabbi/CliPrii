import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
   
  },
  
  {
    name: 'Nouveau dossier',
    url: '/SaisieNv',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Modification Dossier',
    url: '/modification',
    icon: 'icon-pencil'
  },
 
  {
    name: 'Traitement dossier',
    url: '/traitement',
    icon: 'icon-puzzle',
   
  },
  {
    name: 'OPC',
    url: '/OPC',
    icon: 'icon-cursor',
   
  },

  {
    name: 'reporting',
    url: '/reporting',
    icon: 'icon-star',
  
  },



  {
    name: 'Déconnexion',
    url: '/login',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    
  },
 
];
