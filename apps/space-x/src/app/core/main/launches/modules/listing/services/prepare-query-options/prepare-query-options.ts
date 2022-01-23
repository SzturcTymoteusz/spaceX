import { Injectable } from '@angular/core';
import { PrepareQueryOptionsService } from './prepare-query-options.service';
import { QueryOptionDto } from '../../models/query-option-dto';

@Injectable({
  providedIn: 'root',
  useClass: PrepareQueryOptionsService,
})
export abstract class PrepareQueryOptions {
  abstract prepare(): QueryOptionDto;
}
