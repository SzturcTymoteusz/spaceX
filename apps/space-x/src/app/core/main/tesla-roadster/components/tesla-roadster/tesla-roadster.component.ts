import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadsterInfo } from '../../models/roadster-info';

@Component({
  selector: 'space-x-tesla-roadster',
  templateUrl: './tesla-roadster.component.html',
  styleUrls: ['./tesla-roadster.component.scss'],
})
export class TeslaRoadsterComponent implements OnInit {
  roadsterInfo!: RoadsterInfo;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.roadsterInfo = this.activatedRoute.snapshot.data['roadsterInfo'];
  }

  goBack() {
    this.router.navigate(['']);
  }
}
