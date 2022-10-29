import { faker } from '@faker-js/faker';

export default function FakerVars() {
  const siteColorTheme = faker.color.rgb({ prefix: '#', casing: 'lower' });
}