import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-room-two',
  templateUrl: './room-two.component.html',
  styleUrls: ['./room-two.component.css'],
})
export class RoomTwoComponent implements OnInit {
  items: Item[] = [
    {
      id: 1,
      name: 'Henri Couriot',
      content: 'Salle la grande histoire de Couriot',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine5_%20HenriCouriotPresidentCompagnie.wav',
    },
    {
      id: 2,
      name: 'Alphonse, électromécanicien',
      content: 'Ateliers des locomotives',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine8_Alphonse.wav',
    },
    {
      id: 3,
      name: 'Eugène, garde-lavabo',
      content: 'Grand lavabo',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine4_Eugene.wav',
    },
    {
      id: 4,
      name: 'Louise, aide-lampiste',
      content: 'Lampisterie (petite salle)',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine3_Louise.wav',
    },
    {
      id: 5,
      name: 'Antoine, machiniste',
      content: 'Salle de la machine d’extraction',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine2_Antoine.wav',
    },
    {
      id: 6,
      name: 'Augustine,Clapeuse',
      content: 'Recette du jour (pupitre des charbons)',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine1_Augustine.wav',
    },
  ];
  iterationList: number = 0;

  constructor() {}

  ngOnInit(): void {}

  down(): void {
    if (this.iterationList > 0) {
      this.iterationList -= 1;
    }
  }

  up(): void {
    if (this.iterationList < 5) {
      this.iterationList += 1;
    }
  }
}
