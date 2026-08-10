const getDropzoneConstructor = () => {
  return typeof window !== 'undefined' ? window.Dropzone : undefined;
};

const disableDropzoneAutoDiscover = () => {
  const DropzoneConstructor = getDropzoneConstructor();

  if (DropzoneConstructor) {
    DropzoneConstructor.autoDiscover = false;
  }
};

disableDropzoneAutoDiscover();

export const initNavigationMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.navigation ');
  const menuLinks = document.querySelectorAll('.menu__link');

  const toggleMenu = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  };

  if (burger) burger.addEventListener('click', toggleMenu);
  menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
};

export const initDropzones = () => {
  const dropzoneForms = document.querySelectorAll('[data-dropzone]');
  if (!dropzoneForms.length) return;

  const DropzoneConstructor = getDropzoneConstructor();

  if (!DropzoneConstructor) return;

  DropzoneConstructor.autoDiscover = false;

  dropzoneForms.forEach(el => {
    if (el.dropzone) return;

    const dropzone = new DropzoneConstructor(el, {
      url: el.getAttribute('action') || '#',
      autoProcessQueue: false,
      uploadMultiple: false,
      maxFiles: 1,
      thumbnailWidth: 315,
      thumbnailHeight: 200,
      addRemoveLinks: true,
      clickable: true,
      acceptedFiles: 'image/*',
      dictDefaultMessage: 'Перетащите фото чека или нажмите для выбора',
      dictRemoveFile: 'Удалить',
    });

    dropzone.on('maxfilesexceeded', function (file) {
      this.removeAllFiles();
      this.addFile(file);
    });
  });
};

export const initPrizeSelectPreview = () => {
  const selects = document.querySelectorAll('[data-select]');
  if (!selects.length) return;

  selects.forEach(select => {
    const image = select.closest('.prize')?.querySelector('.prize__image img');
    if (!image) return;

    select.addEventListener('change', () => {
      const src = select.options[select.selectedIndex]?.dataset.image;
      if (src) image.src = src;
    });
  });
};

export const hidePreloader = () => {
  const preloader = document.querySelector('[data-preloader]');
  const body = document.querySelector('.body');

  if (!preloader || !body) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
    preloader.style.pointerEvents = `none`;
    // if (preloader.classList.contains('main-preloader')) {
    //   setTimeout(() => {
    //     const scrollTop = body.scrollTop;

    //     preloader.style.transition = 'none';
    //     preloader.style.position = 'absolute';
    //     preloader.style.transform = `translateY(${scrollTop}px)`;
    //     setTimeout(() => {
    //       preloader.style.transition = 'transform 1s ease 0s';
    //       preloader.style.transform = `translateY(0px)`;
    //       preloader.style.pointerEvents = `none`;
    //     }, 50);
    //   }, 1000);
    // } else {
    //   setTimeout(() => {
    //     preloader.style.transition = 'transform 2s ease 0s';
    //     preloader.style.transform = `translateY(-101%)`;
    //     preloader.style.pointerEvents = `none`;
    //   }, 1000);
    // }
  }, 300);

  setTimeout(() => {
    body.classList.add('loaded');
  }, 400);
};
