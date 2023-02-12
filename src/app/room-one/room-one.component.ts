import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-room-one',
  templateUrl: './room-one.component.html',
  styleUrls: ['./room-one.component.css'],
})
export class RoomOneComponent implements OnInit {
  items: Item[] = [
    {
      id: 1,
      name: 'Madame M (Libellule Géante)',
      content: 'Jardin du Stéphanien',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine2_MadameM.wav',
    },
    {
      id: 2,
      name: 'Le redoutable Pulmonoscorpius (Scorpion)',
      content: 'Jardin du Carbonifère',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine6_LeRedoutablePulmonoscorpius.wav',
    },
    {
      id: 3,
      name: 'Megarachne n’est pas celle que vous croyez',
      content: 'Jardin du Stéphanien',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine5_MegarachneNestPasCelleQueVousCroyez.wav',
    },
    {
      id: 4,
      name: 'Monsieur Sigillaire triste (Sigillaire)',
      content: 'Salle six siècles',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine4_MonsieurSigillaire.wav',
    },
    {
      id: 5,
      name: 'Lepidodendron deviendra du charbon (Lepidodendron)',
      content: 'Salle six siècles',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine7_PreesidentLEpidodendron.wav',
    },
    {
      id: 6,
      name: 'Pecopteris 1ere, reine des fougères carbonifères (Fougère)',
      content: 'Salle six siècles',
      audio:
        'https://www.saint-etienne.fr/sites/default/files/contribution/internet/culture/Mine8_Pecopteris.mp3',
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
