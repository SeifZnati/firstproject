import { Component } from '@angular/core';
import {Residence} from "../../core/models/Residence";

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences: Residence[] = [
    {
      id: 1, "name": "El fel", "address": "Borj Cedria",
      "image": "../../assets/images/R1.jpeg", status: "Disponible"
    },
    {
      id: 2, "name": "El yasmine",
      "address": "Ezzahra", "image": "../../assets/images/R2.jpg", status:
        "Disponible"
    },
    {
      id: 3, "name": "El Arij",
      "address": "Rades", "image": "../../assets/images/R3.jpg", status:
        "Vendu"
    },
    {
      id: 4, "name": "El Anber", "address": "inconnu",
      "image": "../../assets/images/R4.jpg", status: "En Construction"
    }
  ];

  showLocation(residence: Residence) {
    if (residence.address == "inconnu") {
      alert("L'adresse de la résidence est inconnue");
    }
    else
      alert(`L'adresse de la résidence est: ${residence.address}`);
  }


  fav: Residence[] = [];

  likeResidence(residence: Residence) {
    const index = this.fav.findIndex(like => like.id === residence.id);
    if (index === -1) {
      this.fav.push(residence);
      alert(`${residence.name} a été ajoutée à vos favoris!`);
    } else {
      this.fav.splice(index, 1);
      alert(`${residence.name} a été retirée de vos favoris!`);
    }
  }

  isLiked(residence: Residence): boolean {
    return this.fav.some(like => like.id === residence.id);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ShowExist = "";

  search: string = '';

  filteredResidences: Residence[] = this.listResidences;

  onSearch() {
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  clearSearch() {
    this.search = '';
    this.filteredResidences = this.listResidences;
  }

}
