import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Launch } from '../../../listing/models/launch';
import { SuccessFilter } from '../../../listing/services/success-filter/success-filter';

@Component({
  selector: 'space-x-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
})
export class LaunchComponent implements OnInit {
  launch!: Launch;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public successFilter: SuccessFilter) {}

  ngOnInit(): void {
    this.launch = this.activatedRoute.snapshot.data['launch'];
  }

  goBack() {
    this.router.navigate(['launches']);
  }
}
