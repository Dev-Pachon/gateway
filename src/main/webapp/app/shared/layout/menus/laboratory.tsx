import React, { Suspense } from 'react';

interface MenuProps {
  closeMenu: () => void;
}

const LaboratoryMenuItems: React.LazyExoticComponent<React.FC<MenuProps>> = React.lazy(() =>
  import('@laboratory/entities-menu').catch(() => import('app/shared/error/error-loading'))
);

export const LaboratoryMenu = ({ closeMenu }) => (
  <Suspense fallback={<div>loading...</div>}>
    <LaboratoryMenuItems closeMenu={closeMenu} />
  </Suspense>
);
