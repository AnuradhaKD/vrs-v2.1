import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery = '';
  darazIframeSrc = '';
  ikmanIframeSrc = '';
  aliIframeSrc = '';
  ebayIframeSrc = '';

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedDarazIframeSrc(): SafeResourceUrl {
    return (this.sanitizer.bypassSecurityTrustResourceUrl(this.darazIframeSrc));
  };

  get sanitizedIkmanIframeSrc(): SafeResourceUrl {
    return (this.sanitizer.bypassSecurityTrustResourceUrl(this.ikmanIframeSrc));
  };

  get sanitizedAliIframeSrc(): SafeResourceUrl {
    return (this.sanitizer.bypassSecurityTrustResourceUrl(this.aliIframeSrc));
  };

  get sanitizedEbayIframeSrc(): SafeResourceUrl {
    return (this.sanitizer.bypassSecurityTrustResourceUrl(this.ebayIframeSrc));
  };

  search() {
    this.darazIframeSrc = `https://www.daraz.lk/catalog/?q=`+this.searchQuery+`&_keyori=ss&from=input&spm=a2a0e.home.search.go.675a4625FHW2RI`;
    this.ikmanIframeSrc=`https://ikman.lk/en/ads?query=`+this.searchQuery;
    this.aliIframeSrc=`https://www.aliexpress.com/w/wholesale-`+this.searchQuery+`.html?spm=a2g0o.productlist.search.0`;
    this.ebayIframeSrc = `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=`+this.searchQuery;

  }
}
