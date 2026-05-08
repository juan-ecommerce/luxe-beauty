import { GiHairStrands, GiNails, GiEyelashes, GiFingernail } from 'react-icons/gi'
import { FaSpa } from 'react-icons/fa'

export const services = [
  { id: 'hair',     Icon: GiHairStrands, titleKey: 'services.hair.title',     descKey: 'services.hair.desc' },
  { id: 'nails',    Icon: GiNails,       titleKey: 'services.nails.title',    descKey: 'services.nails.desc' },
  { id: 'brows',    Icon: GiEyelashes,   titleKey: 'services.brows.title',    descKey: 'services.brows.desc' },
  { id: 'pedicure', Icon: FaSpa,         titleKey: 'services.pedicure.title', descKey: 'services.pedicure.desc' },
  { id: 'manicure', Icon: GiFingernail,  titleKey: 'services.manicure.title', descKey: 'services.manicure.desc' },
]
