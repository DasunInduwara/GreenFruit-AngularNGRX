import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IFruit } from '../models/fruit.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);

  constructor() { }

  getFruits () {
    return this.http.get<IFruit>('http://localhost:3000/fruits?page=0&perPage=16')
  }
}
