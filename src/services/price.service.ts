import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PriceService {
    constructor(private http: HttpClient) { }

    // offer index
    getOfferIndex() {
        return this.http.get('https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json');
    }
}