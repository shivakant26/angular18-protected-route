import { Component , OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Profile',
            icon: 'pi pi-home',
            routerLink : "/profile"
        },
        {
            label: 'setting',
            icon: 'pi pi-star',
            routerLink : "/settings"
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        },
        {
          label: 'logout',
          icon: 'pi pi-envelope',
          routerLink:"/logout"
      }
    ]
}
}
