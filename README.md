# alterar-nomenclatura-de-orcamentos-PDF
Funcionalidade da alteração nomenclatura do orçamentos em PDF

## No Arquivo: -> quotationDownloadCompany.ts
Que ficara para organização na pasta: /jsreport
Precisa importa a função que estara na pasta utils
Ex:
import { removeDiacritics } from '~/utils/removeDiacritics';
Imag 01

### E o Codigo para busca a função ficara assim como segue abaixo:

quotation.monthlyAmountOfSecurityCyber = monthlyAmountOfSecurityCyber;

  jsreport.serverUrl =
    'https://....O local do seu templete no JSReport....;

  const request = {
    template: {
      name: `nome01-${removeDiacritics(
        String(company.name?.toLowerCase().replaceAll(' ', ''))
      )}-${quotation.proposalNumber}`,
      shortid: 'l1DbOPsN5',
      recipe: 'chrome-pdf',
    },
    data: {
      company,
      quotation,
      discountValueCloud,
      currentDate: moment.utc(moment.utc()).local().format('DD/MM/YYYY'),
    },
  };
OBS: 
- nome01 = nome da empresa que esta fornecendo o orçamento!

Imag 02

## No Arquivo: -> removeDiacritics.ts
Que ficara para organização na pasta: /utils
Usar o codigo que esta disponivel Aquivo: removeDiacritics.ts

E um codigo grande, mais ira deixa tudo bem organizado para baixa o arquivo PDF.

Imag 04
