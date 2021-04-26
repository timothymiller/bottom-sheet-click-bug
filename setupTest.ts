import '@testing-library/jest-dom/extend-expect';
import "@porsche-design-system/components-react/jsdom-polyfill"

import { skipCheckForPorscheDesignSystemProviderDuringTests } from '@porsche-design-system/components-react';

skipCheckForPorscheDesignSystemProviderDuringTests();
