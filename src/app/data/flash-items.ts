export interface FlashItem {
  num: string;
  icon: string;
  name: string;
  style: string;
  size: string;
  price: number;
  sheet: 'blackwork' | 'fineline' | 'tradizionale';
  taken?: boolean;
}

/** Il foglio flash dello studio. Un'unica fonte dati per Home e Galleria. */
export const FLASH_ITEMS: FlashItem[] = [
  { num: 'N. 01', icon: 'occhio', name: 'Occhio radiante', style: 'Blackwork', size: '8cm', price: 110, sheet: 'blackwork' },
  { num: 'N. 02', icon: 'serpente', name: 'Serpente', style: 'Blackwork', size: '14cm', price: 140, sheet: 'blackwork' },
  { num: 'N. 03', icon: 'ancora', name: 'Ancora', style: 'Blackwork', size: '9cm', price: 95, sheet: 'blackwork', taken: true },
  { num: 'N. 04', icon: 'rondine', name: 'Rondine', style: 'Blackwork', size: '7cm', price: 80, sheet: 'blackwork' },
  { num: 'N. 05', icon: 'rosa', name: 'Rosa lineare', style: 'Fineline', size: '6cm', price: 70, sheet: 'fineline' },
  { num: 'N. 06', icon: 'rondine', name: 'Rondine minuta', style: 'Fineline', size: '4cm', price: 60, sheet: 'fineline' },
  { num: 'N. 07', icon: 'serpente', name: 'Serpente sottile', style: 'Fineline', size: '10cm', price: 100, sheet: 'fineline', taken: true },
  { num: 'N. 08', icon: 'pugnale', name: 'Pugnale e nastro', style: 'Tradizionale', size: '11cm', price: 120, sheet: 'tradizionale' },
  { num: 'N. 09', icon: 'rosa', name: 'Rosa piena', style: 'Tradizionale', size: '9cm', price: 90, sheet: 'tradizionale' },
  { num: 'N. 10', icon: 'ancora', name: 'Ancora classica', style: 'Tradizionale', size: '13cm', price: 130, sheet: 'tradizionale' },
  { num: 'N. 11', icon: 'fulmine', name: 'Fulmine', style: 'Tradizionale', size: '8cm', price: 75, sheet: 'tradizionale' },
  { num: 'N. 12', icon: 'fulmine', name: 'Fulmine pieno', style: 'Blackwork', size: '10cm', price: 85, sheet: 'blackwork' },
];
