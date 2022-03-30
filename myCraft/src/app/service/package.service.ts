import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../model/package';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService extends BaseService<Package> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'package';
  }
}
