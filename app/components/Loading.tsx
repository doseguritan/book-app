import { LoadingOverlay } from '@mantine/core';

export default function LoadingComponent() {
  // Note that position: relative is required
  return (
    <>
        <LoadingOverlay
          visible={true}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'blue', type: 'bars' }}
        />
    </>
  );
}