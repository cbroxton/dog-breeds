import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsListComponent } from './breeds-list.component';
import { BreedsService } from '../../services/breeds.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BreedsListComponent', () => {
  let component: BreedsListComponent;
  let fixture: ComponentFixture<BreedsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ BreedsListComponent ],
      providers: [ BreedsService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // left out any component testing sorry as was spending a bit too long on this :L
});
