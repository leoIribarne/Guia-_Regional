import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//aqui importamos o modulo de busca de cep
import { CepproviderService } from '../services/cepprovider.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute, );
  constructor(private caminho: Router,  private cepProvider : CepproviderService) {}
public cep! : string ;

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  pesquisar(){

    console.log(this.cep);
   
    // =>  esse simbolo faz a ciração de uma function anonima 
    // subscribe: Aguarda o retorno da api e recebe o parametro dara e o => cria a função  
    this.cepProvider.consultarCEP(this.cep).subscribe((data) =>{
      
      console.warn(data)
      var uf = 'SP', cidade ='São Vicente'
      

      //object.entries(data) retorna um array de chave e valor para o data 
      for(const[chave,valor] of Object.entries(data)){
        console.log(chave, valor)
        switch(chave){
              //chave  : valor
          case 'state' : uf = valor 
              break
          case 'city' : cidade = valor
              break
        }
        
      }
      
      //usamos a função de redirecionar usando as variavel uf e cidade 
      this.redirecionar(uf,cidade)
    })

  }
  //damos os parametros "uf:string" e "cidade:string' para utilizar a função,  
  redirecionar(uf:string, cidade:string )
  {
     
    if(uf !='SP' ){
      //Mensagem de Erro 
      console.log('O CEP não é da RMBS - ' + this.cep)
      return
    }
   

     //Usando a váriavel cidade para fazer a consultado no switch
    // switch (cidade) {

    switch(cidade){
  case '11250-021':
    case 'Bertioga':
    case '11250021':
      console.log('Bertioga');
      this.caminho.navigate(['/bertioga']) ;
    break;
    case '11410-385':
      case 'Guarujá':
      case '11410385':
        console.log('guaruja');
        this.caminho.navigate(['/guaruja']); 
      break;
      case '11088-190':
        case 'Santos':
        case '11088190':
          console.log('santos');
          this.caminho.navigate(['/santos']); 
        break;

        case '11360-002':
          case 'São Vicente':
          case '11360002':
            console.log('São vicente');
            this.caminho.navigate(['/saovicente']); 
          break;

          case '11531-430':
            case 'Cubatão':
          case '11531430':
            console.log('Cubatão');
            this.caminho.navigate(['/cubatao']); 
          break;

          case '11704-900':
            case 'Praia Grande':
            case '11704900':
              console.log('Praia grande');
              this.caminho.navigate(['/praiagrande']); 
            break;


            case '11709-000':
              case 'Mongaguá':
            case '11709000':
              console.log('Mongagua');
              this.caminho.navigate(['/mongagua']); 
            break;

            case '11740-972':
              case 'Itanhaém':
            case '11740972':
              console.log('Itanhaem');
              this.caminho.navigate(['/itanhaem']); 
            break;

            case '11770-000':
              case 'Peruíbe':
              case '11770000':
                console.log('Peruibe');
                this.caminho.navigate(['/peruibe']); 
              break;

  }

//   case 'Praia Grande':
    //     console.log('Praia Grande')
        
    //     // encaminha para a aba teste2 
    //     this.caminho.navigate(['/teste2'])        
    //     break;

    //   case '11088190':
    //   case '11088-190':
    //   case 'Santos':
  
    //     console.log('Santos')
    //     this.caminho.navigate(['/santos'])
              
    //   break;
        
    //   default:
    //     console.log('O CEP não é da RMBS - ' + this.cep)
    //     break;
    // }
          
          
    









}
}

