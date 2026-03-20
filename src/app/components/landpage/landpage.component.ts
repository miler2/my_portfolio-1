import { Component } from '@angular/core';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent {
  items = [
    {
      title: 'Qué hice:',
      qualities: [
        "Durante mi tiempo en IkosTech Advanced, trabajé principalmente como Administrador de Sistemas, asegurando la infraestructura tecnológica de la empresa.",
        "Además, colaboré como desarrollador fullstack en proyectos web, apoyando al equipo con mis conocimientos en Angular, Node.js y bases de datos."
      ]
    },
    { 
      title: 'Responsabilidades y Logros Clave',
      qualities: [
        "Administré redes corporativas y servidores Windows/Linux, incluyendo actualizaciones, monitorización y backups",
        "Monté y configuré PCs, estaciones de trabajo y hardware adaptado a necesidades específicas",
        "Optimicé y mantuve bases de datos MySQL/MariaDB, asegurando integridad y rendimiento",
        "Implementé y gestioné servicios en la nube",
        "Resolví incidencias y proporcioné soporte técnico, mejorando la eficiencia operativa",
        "Documenté configuraciones y procedimientos críticos para continuidad de TI",
        "Desarrollé páginas web usando Angular, creando APIs y bases de datos con Node.js"
      ]
    },
    {
      title: 'Habilidades y Tecnologías',
      qualities: [
        "Sistemas operativos: Windows Server, Linux",
        "Redes: Configuración y monitorización de LAN/WAN, seguridad de red",
        "Hardware: PCs, estaciones de trabajo, montaje personalizado",
        "Bases de datos: MySQL, MariaDB",
        "Desarrollo web: Angular, Node.js, APIs",
        "Servicios en la nube: despliegue y administración",
        "Habilidades adicionales: resolución de incidencias, documentación, colaboración en equipo"
      ]
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
