import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  characters: any[] = []
  params = {} as any

  constructor(private rickandmorty: RickAndMortyService) { }

  ngOnInit() {
  }



}
