import { Component, Input, OnInit } from '@angular/core';
import { CompanyAdminRestService } from 'src/app/services/companyAdminRest/company-admin-rest.service';
import { CompanyRestService } from 'src/app/services/companyRest/company-rest.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-body-companies',
  templateUrl: './body-companies.component.html',
  styleUrls: ['./body-companies.component.css']
})
export class BodyCompaniesComponent implements OnInit
{

  //Variables de TypeScript//
  user : any;
  companyImage: any
  uri: any

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  ngOnInit(): void 
  {
    this.userLogin();
  }

  constructor
  (
    private companyRest: CompanyAdminRestService,
    private company : CompanyRestService,
  )
  {
    
  }

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 480) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 480 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  userLogin()
  {
    this.companyRest.getCompany(this.company.getIdentity()._id).subscribe({
      next: (res: any) => {
        this.user = res.getCompany;
        this.companyImage = this.user.image;
        this.uri = environment.baseUrl + 'company/getImage/' + this.companyImage;
        console.log(this.user);
      },
      error: (err) => {alert(err.error.message)}
    })
  }

  logOut()
  {
    localStorage.clear();
    window.location.replace('/login')
  }
}
