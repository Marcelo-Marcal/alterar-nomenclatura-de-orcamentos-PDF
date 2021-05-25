import { removeDiacritics } from '~/utils/removeDiacritics';

quotation.monthlyAmountOfSecurityCyber = monthlyAmountOfSecurityCyber;

jsreport.serverUrl = 'https://playground.jsreport.net/';

//Funcionalidade da alteração nomenclatura do orçamentos em PDF
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

return new Promise((resolve) => {
  jsreport.renderAsync(request).then(function (res: any) {
    resolve(res.toBlob());
  });
  if (renderQuotation) jsreport.render(request);
});
