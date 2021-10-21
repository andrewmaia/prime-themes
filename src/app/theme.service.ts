
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable({
    providedIn: 'root',
})



export class ThemeService {
    constructor(@Inject(DOCUMENT) private document:Document) {
    }

    change(theme: string) {
        let themeLink= this.document.getElementById('app-theme') as HTMLLinkElement;
        if(themeLink)
            themeLink.href=theme + '.css';
    }

}