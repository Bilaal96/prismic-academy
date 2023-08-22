// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Global Nav → Menu Items*
 */
export interface GlobalNavDocumentDataMenuItemsItem {
  /**
   * Menu Label field in *Global Nav → Menu Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_nav.menu_items[].menu_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menu_label: prismic.KeyTextField;

  /**
   * Menu Link field in *Global Nav → Menu Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: global_nav.menu_items[].menu_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  menu_link: prismic.LinkField;
}

/**
 * Content for Global Nav documents
 */
interface GlobalNavDocumentData {
  /**
   * Company Name field in *Global Nav*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_nav.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name: prismic.RichTextField;

  /**
   * Menu Items field in *Global Nav*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: global_nav.menu_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<Simplify<GlobalNavDocumentDataMenuItemsItem>>;
}

/**
 * Global Nav document from Prismic
 *
 * - **API ID**: `global_nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalNavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalNavDocumentData>,
    "global_nav",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = TextSliceSlice | SplitImageTextSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type MarketingPageDocumentDataSlicesSlice =
  | EmbedSectionSlice
  | SplitImageTextSlice
  | TextSliceSlice;

type MarketingPageDocumentDataSlices1Slice =
  | EmbedSectionSlice
  | TextSliceSlice
  | SplitImageTextSlice;

/**
 * Content for Marketing Page documents
 */
interface MarketingPageDocumentData {
  /**
   * Slice Zone field in *Marketing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: marketing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MarketingPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Marketing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: marketing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Marketing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: marketing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Marketing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: marketing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Marketing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: marketing_page.slices1[]
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices1: prismic.SliceZone<MarketingPageDocumentDataSlices1Slice>;
}

/**
 * Marketing Page document from Prismic
 *
 * - **API ID**: `marketing_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MarketingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MarketingPageDocumentData>,
    "marketing_page",
    Lang
  >;

export type AllDocumentTypes =
  | GlobalNavDocument
  | HomepageDocument
  | MarketingPageDocument;

/**
 * Primary content in *EmbedSection → Primary*
 */
export interface EmbedSectionSliceDefaultPrimary {
  /**
   * Background Colour field in *EmbedSection → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: embed_section.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Text field in *EmbedSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: embed_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Embed field in *EmbedSection → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: embed_section.primary.embed
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  embed: prismic.EmbedField;
}

/**
 * Default variation for EmbedSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EmbedSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *EmbedSection*
 */
type EmbedSectionSliceVariation = EmbedSectionSliceDefault;

/**
 * EmbedSection Shared Slice
 *
 * - **API ID**: `embed_section`
 * - **Description**: EmbedSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedSectionSlice = prismic.SharedSlice<
  "embed_section",
  EmbedSectionSliceVariation
>;

/**
 * Primary content in *SplitImageText → Primary*
 */
export interface SplitImageTextSliceDefaultPrimary {
  /**
   * Background Colour field in *SplitImageText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Image field in *SplitImageText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *SplitImageText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for SplitImageText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SplitImageTextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Primary*
 */
export interface SplitImageTextSliceSplitImageRightPrimary {
  /**
   * Background Colour field in *SplitImageText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Text field in *SplitImageText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *SplitImageText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * SplitImageRight variation for SplitImageText Slice
 *
 * - **API ID**: `splitImageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceSplitImageRight = prismic.SharedSliceVariation<
  "splitImageRight",
  Simplify<SplitImageTextSliceSplitImageRightPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Primary*
 */
export interface SplitImageTextSliceSplitButtonLeftPrimary {
  /**
   * Background Colour field in *SplitImageText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Text field in *SplitImageText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Label field in *SplitImageText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *SplitImageText → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *SplitImageText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * SplitButtonLeft variation for SplitImageText Slice
 *
 * - **API ID**: `splitButtonLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceSplitButtonLeft = prismic.SharedSliceVariation<
  "splitButtonLeft",
  Simplify<SplitImageTextSliceSplitButtonLeftPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Primary*
 */
export interface SplitImageTextSliceSplitButtonRightPrimary {
  /**
   * Background Colour field in *SplitImageText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Image field in *SplitImageText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *SplitImageText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Label field in *SplitImageText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *SplitImageText → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * SplitButtonRight variation for SplitImageText Slice
 *
 * - **API ID**: `splitButtonRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceSplitButtonRight = prismic.SharedSliceVariation<
  "splitButtonRight",
  Simplify<SplitImageTextSliceSplitButtonRightPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Primary*
 */
export interface SplitImageTextSliceHeroSectionPrimary {
  /**
   * Background Colour field in *SplitImageText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Title field in *SplitImageText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Paragraph field in *SplitImageText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Button Label field in *SplitImageText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *SplitImageText → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *SplitImageText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * HeroSection variation for SplitImageText Slice
 *
 * - **API ID**: `heroSection`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceHeroSection = prismic.SharedSliceVariation<
  "heroSection",
  Simplify<SplitImageTextSliceHeroSectionPrimary>,
  never
>;

/**
 * Slice variation for *SplitImageText*
 */
type SplitImageTextSliceVariation =
  | SplitImageTextSliceDefault
  | SplitImageTextSliceSplitImageRight
  | SplitImageTextSliceSplitButtonLeft
  | SplitImageTextSliceSplitButtonRight
  | SplitImageTextSliceHeroSection;

/**
 * SplitImageText Shared Slice
 *
 * - **API ID**: `split_image_text`
 * - **Description**: SplitImageText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSlice = prismic.SharedSlice<
  "split_image_text",
  SplitImageTextSliceVariation
>;

/**
 * Primary content in *TextSlice → Primary*
 */
export interface TextSliceSliceDefaultPrimary {
  /**
   * Background Colour field in *TextSlice → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Text Field field in *TextSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.text_field
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_field: prismic.RichTextField;

  /**
   * Text Align field in *TextSlice → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.text_align
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_align: prismic.SelectField<"text-center" | "text-left">;
}

/**
 * Default variation for TextSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextSlice → Primary*
 */
export interface TextSliceSliceCallToActionButtonPrimary {
  /**
   * Background Colour field in *TextSlice → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green">;

  /**
   * Text Field field in *TextSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.text_field
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_field: prismic.RichTextField;

  /**
   * Button Link field in *TextSlice → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *TextSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_slice.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Call To Action Button variation for TextSlice Slice
 *
 * - **API ID**: `callToActionButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceSliceCallToActionButton = prismic.SharedSliceVariation<
  "callToActionButton",
  Simplify<TextSliceSliceCallToActionButtonPrimary>,
  never
>;

/**
 * Slice variation for *TextSlice*
 */
type TextSliceSliceVariation =
  | TextSliceSliceDefault
  | TextSliceSliceCallToActionButton;

/**
 * TextSlice Shared Slice
 *
 * - **API ID**: `text_slice`
 * - **Description**: TextSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceSlice = prismic.SharedSlice<
  "text_slice",
  TextSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalNavDocument,
      GlobalNavDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MarketingPageDocument,
      MarketingPageDocumentData,
      MarketingPageDocumentDataSlicesSlice,
      MarketingPageDocumentDataSlices1Slice,
      AllDocumentTypes,
      EmbedSectionSlice,
      EmbedSectionSliceDefaultPrimary,
      EmbedSectionSliceVariation,
      EmbedSectionSliceDefault,
      SplitImageTextSlice,
      SplitImageTextSliceDefaultPrimary,
      SplitImageTextSliceSplitImageRightPrimary,
      SplitImageTextSliceSplitButtonLeftPrimary,
      SplitImageTextSliceSplitButtonRightPrimary,
      SplitImageTextSliceHeroSectionPrimary,
      SplitImageTextSliceVariation,
      SplitImageTextSliceDefault,
      SplitImageTextSliceSplitImageRight,
      SplitImageTextSliceSplitButtonLeft,
      SplitImageTextSliceSplitButtonRight,
      SplitImageTextSliceHeroSection,
      TextSliceSlice,
      TextSliceSliceDefaultPrimary,
      TextSliceSliceCallToActionButtonPrimary,
      TextSliceSliceVariation,
      TextSliceSliceDefault,
      TextSliceSliceCallToActionButton,
    };
  }
}