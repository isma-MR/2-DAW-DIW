import { bootstrapApplication } from '@angular/platform-browser';
import { minecraftMainConfig } from './minecraft/components/pages/minecraft-main/minecraft-main.config';
import { MinecraftMain } from './minecraft/components/pages/minecraft-main/minecraft-main';

bootstrapApplication(MinecraftMain, minecraftMainConfig)
  .catch((err) => console.error(err));
