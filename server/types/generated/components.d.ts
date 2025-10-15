import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAbout extends Struct.ComponentSchema {
  collectionName: 'components_blocks_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    about: Schema.Attribute.Component<'shared.image-grid', false>;
    sectionheading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.buttons', false>;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    imageLocation: Schema.Attribute.Enumeration<['Center', 'Left', 'Right']> &
      Schema.Attribute.DefaultTo<'Center'>;
    isHomeHero: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    logoBanner: Schema.Attribute.Component<'layout.logo-banner', false>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksProjects extends Struct.ComponentSchema {
  collectionName: 'components_blocks_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    projects: Schema.Attribute.Component<'shared.image-grid', true>;
    sectionheading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['green', 'gold', 'black', 'white']
    > &
      Schema.Attribute.DefaultTo<'green'>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.buttons', true>;
    copyrightText: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.buttons', false>;
    headerNav: Schema.Attribute.Component<'shared.buttons', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface LayoutLogoBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_logo_banners';
  info: {
    displayName: 'Logo Banner';
  };
  attributes: {
    icons: Schema.Attribute.Component<'shared.icon-grid', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Buttons';
  };
  attributes: {
    buttonType: Schema.Attribute.Enumeration<
      ['Primary', 'Secondary', 'Tercinary']
    > &
      Schema.Attribute.DefaultTo<'Primary'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedIconGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_grids';
  info: {
    displayName: 'Icon Grid';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface SharedImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_grids';
  info: {
    displayName: 'Image Grid';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.buttons', true>;
    description: Schema.Attribute.RichText;
    icons: Schema.Attribute.Component<'shared.icon-grid', true>;
    image: Schema.Attribute.Media<'images'>;
    imageBeforeTitle: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    imageLocation: Schema.Attribute.Enumeration<['center', 'left', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['none', 'black', 'white']> &
      Schema.Attribute.DefaultTo<'none'>;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about': BlocksAbout;
      'blocks.hero': BlocksHero;
      'blocks.projects': BlocksProjects;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.logo-banner': LayoutLogoBanner;
      'shared.buttons': SharedButtons;
      'shared.icon-grid': SharedIconGrid;
      'shared.image-grid': SharedImageGrid;
      'shared.logo-link': SharedLogoLink;
      'shared.section-heading': SharedSectionHeading;
    }
  }
}
