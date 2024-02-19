import { format, parseISO } from 'date-fns';
import { Locale } from 'date-fns';

import { ptBR } from 'date-fns/locale';

export const formatDate = (date: string) => {  
  return date ? format(parseISO(date), "dd/MM/yyyy", {
    locale: ptBR as Locale,
  }) : null;
};