import { TestBed } from '@angular/core/testing';
import { MinecraftMain } from './minecraft-main';

describe('MinecraftMain', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinecraftMain],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MinecraftMain);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MinecraftMain);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Prueba-Lorenzo-App');
  });
});
