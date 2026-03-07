import { TestBed } from '@angular/core/testing';

import { NavbarRoutingServiceService } from './navbar-routing-service.service';

describe('NavbarRoutingServiceService', () => {
  let service: NavbarRoutingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarRoutingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
