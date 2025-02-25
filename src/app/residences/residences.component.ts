import {Component, OnInit} from '@angular/core';
import {Residence} from "../../core/models/Residence";
import {ResidenceService} from "../service/residence.service";

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  listServiceResidences: Residence[] = [];
  filteredResidences: Residence[] = [];
  ngOnInit() {
    this.residenceService.getAllResidences().subscribe((residences) => {
      this.listServiceResidences = residences;
      this.filteredResidences = this.listServiceResidences;
      console.log(this.listServiceResidences);
    });
  }

  num!: any;
  constructor(private residenceService: ResidenceService){
  }

  shownumber(){
    this.num = this.residenceService.getnumberofvalue(this.listServiceResidences, 'name', 'El Arij');
  }


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

  search: string = '';


  onSearch() {
    this.filteredResidences = this.listServiceResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  clearSearch() {
    this.search = '';
    this.filteredResidences = this.listServiceResidences;
  }

  deleteResidence(id: any) {
    this.residenceService.deleteResidence(id).subscribe(() => {
      alert('Résidence supprimée avec succès!');
      }
    );
    this.ngOnInit();
  }
}
