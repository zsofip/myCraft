import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Package } from 'src/app/model/package';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {

  packages$: Observable<Package[]> = this.packageService.getAll();
  keys: string[] = Object.keys(new Package());
  componentName = 'package';

  package!: Package;
  newPackage: Package = new Package();
  id!: string;

  panelOpenState = false;

  constructor(
    private ar: ActivatedRoute,
    private packageService: PackageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.id = params['id'])).subscribe(
        () => {
          if (this.id === '0') {
            this.package = this.newPackage;
          } else {
            this.packageService.getOne(Number(this.id)).subscribe(
              (result) => this.package = result
            )
          }
        }
      );
  }

  onSubmit(pack: Package): void {
    this.packageService.update(pack).subscribe(
      () => {
      this.router.navigate(['/', 'package']);
   });
  }
}
