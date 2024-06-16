import { Component, Input, TemplateRef } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';



const PrimaryWhite = '#ffffff';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  @Input()loading:boolean;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = PrimaryWhite;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: '3px',
  };
  public loadingTemplate!: TemplateRef<any>;
}
