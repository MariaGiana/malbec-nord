import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Contact } from './Contact';

const URL="https://686a9cdfe559eba908707590.mockapi.io/messages"

@Injectable({
  providedIn: 'root'
})
export class CustomersMessagesService {

  constructor(private http: HttpClient) { }

  public postMessages(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(URL, contact);
  }
}
