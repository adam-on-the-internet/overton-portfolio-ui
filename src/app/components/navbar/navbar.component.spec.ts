import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { RouterTestingModule } from "@angular/router/testing";
import { SimpleComponentsModule } from "src/app/simple-components/simple-components.module";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule, SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
