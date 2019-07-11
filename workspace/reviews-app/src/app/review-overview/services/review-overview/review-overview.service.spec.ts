import { TestBed } from '@angular/core/testing';

import { ReviewOverviewService } from './review-overview.service';

describe('ReviewOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewOverviewService = TestBed.get(ReviewOverviewService);
    expect(service).toBeTruthy();
  });
});
