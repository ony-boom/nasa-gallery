export interface VideoMetadata {
  "QuickTime:PreferredVolume": string;
  "QuickTime:ImageWidth": number;
  "QuickTime:PreviewDuration": string;
  "QuickTime:MinorVersion": string;
  "File:FileInodeChangeDate": string;
  "QuickTime:Duration": string;
  "AVAIL:Creator": null;
  "XMP:AudioSampleRate": number;
  "File:FileTypeExtension": string;
  "File:FileSize": string;
  "QuickTime:SourceImageHeight": number;
  "ExifTool:ExifToolVersion": number;
  "QuickTime:TrackHeaderVersion": number;
  "QuickTime:HandlerType": string;
  "XMP:XMPToolkit": string;
  "QuickTime:UserData_TIM": string;
  "File:FileAccessDate": string;
  "QuickTime:CompressorID": string;
  "QuickTime:GraphicsMode": string;
  "QuickTime:AudioBitsPerSample": number;
  "XMP:Orientation": XmpOrientation;
  "QuickTime:MovieHeaderVersion": number;
  "XMP:VideoPixelAspectRatio": number;
  "QuickTime:BitDepth": number;
  "XMP:StartTimeSampleSize": number;
  "QuickTime:TimeScale": number;
  "XMP:ProjectRef": XmpProjectRef;
  "QuickTime:MediaModifyDate": string;
  "XMP:AudioChannelType": XmpAudioChannelType;
  "AVAIL:Center": string;
  "QuickTime:TrackLayer": number;
  "QuickTime:ModifyDate": string;
  "AVAIL:DateCreated": string;
  "AVAIL:Album": any[];
  "XMP:Ingredients": Ingredient[];
  SourceFile: string;
  "QuickTime:UserData_TSZ": number;
  "File:FileModifyDate": string;
  "AVAIL:Thumbnails": AVAILThumbnails;
  "File:MIMEType": string;
  "QuickTime:MovieDataOffset": number;
  "QuickTime:AudioFormat": string;
  "QuickTime:SelectionTime": string;
  "QuickTime:PosterTime": string;
  "File:FilePermissions": string;
  "QuickTime:OpColor": string;
  "XMP:Format": XmpFormat;
  "QuickTime:NextTrackID": number;
  "XMP:Pantry": XMPPantry[];
  "XMP:StartTimeScale": number;
  "File:FileName": string;
  "AVAIL:Location": string;
  "QuickTime:MediaCreateDate": string;
  "XMP:VideoFrameSize": XmpVideoFrameSize;
  "QuickTime:Balance": number;
  "Composite:AvgBitrate": string;
  "QuickTime:MajorBrand": string;
  "XMP:AltTimecode": XmpTTimecode;
  "AVAIL:Keywords": string[];
  "AVAIL:Photographer": string;
  "AVAIL:Title": string;
  "QuickTime:SourceImageWidth": number;
  "QuickTime:YResolution": number;
  "XMP:AudioSampleType": XmpAudioSampleType;
  "AVAIL:SecondaryCreator": string;
  "QuickTime:ImageHeight": number;
  "XMP:ModifyDate": string;
  "Composite:ImageSize": string;
  "XMP:OriginalDocumentID": string;
  "QuickTime:XResolution": number;
  "QuickTime:AudioChannels": number;
  "QuickTime:MediaHeaderVersion": number;
  "QuickTime:PreviewTime": string;
  "XMP:WindowsAtom": XMPWindowsAtom;
  "QuickTime:VideoFrameRate": number;
  "AVAIL:NASAID": string;
  "XMP:VideoFrameRate": number;
  "Composite:Rotation": number;
  "QuickTime:TrackID": number;
  "QuickTime:TrackVolume": string;
  "XMP:DocumentID": string;
  "QuickTime:HandlerDescription": string;
  "QuickTime:UserData_TSC": number;
  "QuickTime:CompressorName": string;
  "QuickTime:TrackCreateDate": string;
  "QuickTime:MediaTimeScale": number;
  "AVAIL:Owner": string;
  "QuickTime:MovieDataSize": number;
  "XMP:History": History[];
  "File:Directory": string;
  "File:FileType": string;
  "QuickTime:CreateDate": string;
  "XMP:MacAtom": XmpMACAtom;
  "QuickTime:SelectionDuration": string;
  "QuickTime:CurrentTime": string;
  "QuickTime:MatrixStructure": string;
  "XMP:Duration": XmpDuration;
  "XMP:VideoFieldOrder": XmpVideoFieldOrder;
  "QuickTime:MediaLanguageCode": string;
  "QuickTime:CompatibleBrands": string[];
  "XMP:StartTimecode": XmpTTimecode;
  "AVAIL:MediaType": string;
  "AVAIL:Description508": string;
  "QuickTime:PreferredRate": number;
  "QuickTime:TrackModifyDate": string;
  "AVAIL:Description": string;
  "XMP:InstanceID": string;
  "XMP:DerivedFrom": DerivedFrom;
  "QuickTime:TrackDuration": string;
  "Composite:Megapixels": number;
  "XMP:CreateDate": string;
  "QuickTime:AudioSampleRate": number;
  "XMP:CreatorTool": XmpCreatorTool;
  "QuickTime:MediaDuration": string;
  "XMP:MetadataDate": string;
}

export interface AVAILThumbnails {
  large: string[];
  small: string[];
  thumb: string[];
  medium: string[];
}

export interface XmpTTimecode {
  TimeFormat: TimeFormat;
  TimeValue: string;
}

export enum TimeFormat {
  The23976FPS = "23.976 fps",
  The24FPS = "24 fps",
  The30FPS = "30 fps",
  The5994FPSDrop = "59.94 fps (drop)",
  The5994FPSNonDrop = "59.94 fps (non-drop)",
  UnknownAudioSamplesTimecode = "Unknown (AudioSamplesTimecode)",
}

export enum XmpAudioChannelType {
  Mono = "Mono",
  Stereo = "Stereo",
}

export enum XmpAudioSampleType {
  The16BitInteger = "16-bit integer",
  The32BitFloat = "32-bit float",
}

export enum XmpCreatorTool {
  AdobeAdobeMediaEncoderCC2014Windows = "Adobe Adobe Media Encoder CC 2014 (Windows)",
  AdobeAdobeMediaEncoderCC20180Macintosh = "Adobe Adobe Media Encoder CC 2018.0 (Macintosh)",
  AdobeAdobeMediaEncoderCC20181Windows = "Adobe Adobe Media Encoder CC 2018.1 (Windows)",
  AdobeAdobeMediaEncoderCC20190Windows = "Adobe Adobe Media Encoder CC 2019.0 (Windows)",
  AdobeAdobeMediaEncoderCS6Windows = "Adobe Adobe Media Encoder CS6 (Windows)",
  AdobeAfterEffectsCC2014Macintosh = "Adobe After Effects CC 2014 (Macintosh)",
  AdobeAfterEffectsCC2019Macintosh = "Adobe After Effects CC 2019 (Macintosh)",
  AdobeAudition121Macintosh = "Adobe Audition 12.1 (Macintosh)",
  AdobeAudition130Macintosh = "Adobe Audition 13.0 (Macintosh)",
  AdobeAuditionCC20190Windows = "Adobe Audition CC 2019.0 (Windows)",
  AdobePProHeadlessCS6Windows = "Adobe PProHeadless CS6 (Windows)",
  AdobePhotoshopCS5Macintosh = "Adobe Photoshop CS5 Macintosh",
  AdobePhotoshopCameraRaw67Macintosh = "Adobe Photoshop Camera Raw 6.7 (Macintosh)",
  AdobePremierePro20200Macintosh = "Adobe Premiere Pro 2020.0 (Macintosh)",
  AdobePremiereProCC20171Windows = "Adobe Premiere Pro CC 2017.1 (Windows)",
  AdobePremiereProCC20181Windows = "Adobe Premiere Pro CC 2018.1 (Windows)",
  AdobePremiereProCC20190Windows = "Adobe Premiere Pro CC 2019.0 (Windows)",
  AdobePremiereProCS6Windows = "Adobe Premiere Pro CS6 (Windows)",
  FirmwareV1060 = "Firmware v1.0.6.0",
  Lavf5734103 = "Lavf57.34.103",
}

export interface DerivedFrom {
  DocumentID: string;
  InstanceID: string;
  OriginalDocumentID: string;
}

export interface XmpDuration {
  Value: number;
  Scale: number;
}

export enum XmpFormat {
  AudioXWav = "audio/x-wav",
  H264 = "H.264",
  ImageJPEG = "image/jpeg",
  QuickTime = "QuickTime",
  QuickTimeMOVFileMR = "QuickTime MOV file (MR)",
  WaveformAudio = "Waveform Audio",
}

export interface History {
  SoftwareAgent?: XmpCreatorTool;
  InstanceID?: string;
  When?: string;
  Action: Action;
  Changed?: Changed;
  Parameters?: string;
}

export enum Action {
  Converted = "converted",
  Created = "created",
  Derived = "derived",
  Modified = "modified",
  Saved = "saved",
}

export enum Changed {
  Empty = "/",
  Metadata = "/metadata",
  MetadataXmpDMTracks = "/metadata/xmpDM/Tracks",
}

export interface Ingredient {
  DocumentID: string;
  MaskMarkers: MaskMarkers;
  FromPart: string;
  InstanceID: string;
  ToPart: string;
  FilePath: string;
}

export enum MaskMarkers {
  None = "None",
}

export interface XmpMACAtom {
  PosixProjectPath?: string;
  ApplicationCode: number;
  InvocationAppleEvent: number;
}

export enum XmpOrientation {
  HorizontalNormal = "Horizontal (normal)",
}

export interface XMPPantry {
  DocumentID: string;
  InstanceID: string;
  "XMP-xmp:ModifyDate"?: string;
  OriginalDocumentID: string;
  "XMP-dc:Identifier"?: string;
  "XMP-xmp:MetadataDate": string;
  History: History[];
  "XMP-xmpDM:VideoPixelAspectRatio"?:
    | XMPXmpDMVideoPixelAspectRatioEnum
    | number;
  "XMP-tiff:Model"?: XMPTiffModel;
  "XMP-tiff:Make"?: XMPTiffMake;
  "XMP-xmpDM:VideoFrameSize"?: XmpVideoFrameSize;
  "XMP-xmpDM:AudioCompressor"?: XMPXmpDMAudioCompressor;
  "XMP-xmpDM:Duration"?: XmpDuration;
  "XMP-xmpDM:VideoFrameRate"?: number | XMPXmpDMVideoFrameRateEnum;
  "XMP-xmp:CreateDate"?: number | string;
  "XMP-xmpDM:VideoCompressor"?: XMPXmpDMVideoCompressor;
  "XMP-xmpDM:CameraModel"?: XMPXmpDMCameraModel;
  "XMP-aux:SerialNumber"?: number | string;
  "XMP-tiff:Orientation"?: XmpOrientation;
  "XMP-xmpDM:LogComment"?: XMPXmpDMLogComment;
  "XMP-creatorAtom:AeProjectLink"?: XMPCreatorAtomAEProjectLink;
  "XMP-xmpDM:StartTimecode"?: XmpTTimecode;
  "XMP-creatorAtom:WindowsAtom"?: XMPCreatorAtomWindowsAtom;
  "XMP-creatorAtom:MacAtom"?: XmpMACAtom;
  "XMP-xmpDM:StartTimeSampleSize"?: number;
  "XMP-xmp:CreatorTool"?: XmpCreatorTool;
  "XMP-xmpDM:VideoFieldOrder"?: XmpVideoFieldOrder;
  "XMP-xmpDM:AltTimecode"?: XmpTTimecode;
  "XMP-dc:Format"?: XmpFormat;
  "XMP-xmpDM:StartTimeScale"?: number;
  "XMP-xmpDM:ProjectRef"?: XmpProjectRef;
  DerivedFrom?: DerivedFrom;
  Ingredients?: Ingredient[];
  "XMP-xmpDM:AudioChannelType"?: XmpAudioChannelType;
  "XMP-xmpDM:AudioSampleType"?: XmpAudioSampleType;
  "XMP-xmpDM:AudioSampleRate"?: number;
  "XMP-xmpDM:AltTapeName"?: string;
  "XMP-dc:Title"?: string;
  "XMP-xmpDM:Composer"?: string;
  "XMP-xmpDM:Artist"?: string;
  "XMP-xmpDM:TrackNumber"?: number;
  "XMP-xmpDM:Album"?: string;
  "XMP-dc:Rights"?: string;
  "XMP-riffinfo:Product"?: string;
  "XMP-riffinfo:Technician"?: string;
  "XMP-riffinfo:Name"?: string;
  "XMP-bext:OriginationDate"?: Date;
  "XMP-bext:OriginationTime"?: string;
  "XMP-bext:Version"?: number;
  "XMP-bext:TimeReference"?: number;
  "XMP-bext:OriginatorReference"?: string;
  "XMP-bext:Originator"?: XMPBextOriginator;
  "XMP-xmpDM:Tracks"?: XMPXmpDMTrack[];
  "XMP-xmpDM:VideoAlphaMode"?: MaskMarkers;
  "XMP-xmpDM:ShotName"?: string;
  "XMP-xmpDM:FileDataRate"?: number;
  "XMP-crs:WhiteBalance"?: string;
  "XMP-xmp:NativeDigests"?: XMPXmpNativeDigests;
  "XMP-crs:Exposure"?: string;
  "XMP-xmp:Rating"?: number;
  "XMP-crs:ToneCurvePV2012Green"?: string[];
  "XMP-aux:ApproximateFocusDistance"?: number;
  "XMP-photoshop:DocumentAncestors"?: string[];
  "XMP-crs:PerspectiveRotate"?: number;
  "XMP-exif:SceneType"?: string;
  "XMP-crs:Clarity"?: number;
  "XMP-exif:MeteringMode"?: string;
  "XMP-crs:HueAdjustmentAqua"?: number;
  "XMP-aux:Lens"?: string;
  "XMP-crs:SaturationAdjustmentMagenta"?: number;
  "XMP-exif:ExposureProgram"?: string;
  "XMP-crs:HueAdjustmentPurple"?: number;
  "XMP-photoshop:DateCreated"?: string;
  "XMP-crs:HueAdjustmentYellow"?: number;
  "XMP-crs:CropAngle"?: number;
  "XMP-aux:LensInfo"?: string;
  "XMP-crs:SaturationAdjustmentBlue"?: number;
  "XMP-exif:GainControl"?: string;
  "XMP-crs:HueAdjustmentRed"?: number;
  "XMP-crs:CropLeft"?: number;
  "XMP-crs:CropHeight"?: number;
  "XMP-crs:LuminanceNoiseReductionContrast"?: number;
  "XMP-exif:ExifVersion"?: string;
  "XMP-crs:BlueHue"?: number;
  "XMP-crs:GreenSaturation"?: number;
  "XMP-crs:ShadowTint"?: number;
  "XMP-exif:SensingMethod"?: string;
  "XMP-exif:ColorSpace"?: string;
  "XMP-exif:ExposureBiasValue"?: number;
  "XMP-exif:Saturation"?: string;
  "XMP-crs:Version"?: number;
  "XMP-crs:LuminanceSmoothing"?: number;
  "XMP-crs:AlreadyApplied"?: boolean;
  "XMP-exif:SubjectDistance"?: string;
  "XMP-crs:BlueSaturation"?: number;
  "XMP-crs:ColorNoiseReduction"?: number;
  "XMP-crs:LuminanceAdjustmentRed"?: number;
  "XMP-crs:SaturationAdjustmentOrange"?: number;
  "XMP-exif:Flash"?: XMPExifFlash;
  "XMP-exif:WhiteBalance"?: string;
  "XMP-crs:LensProfileEnable"?: number;
  "XMP-crs:PostCropVignetteAmount"?: number;
  "XMP-crs:SharpenRadius"?: string;
  "XMP-crs:GreenHue"?: number;
  "XMP-crs:Exposure2012"?: number;
  "XMP-crs:Vibrance"?: number;
  "XMP-crs:HueAdjustmentOrange"?: number;
  "XMP-exif:PixelYDimension"?: number;
  "XMP-crs:HasCrop"?: boolean;
  "XMP-tiff:ImageLength"?: number;
  "XMP-crs:Temperature"?: number;
  "XMP-crs:ConvertToGrayscale"?: boolean;
  "XMP-crs:RedSaturation"?: number;
  "XMP-crs:LuminanceAdjustmentPurple"?: number;
  "XMP-crs:LuminanceAdjustmentYellow"?: number;
  "XMP-exif:DigitalZoomRatio"?: number;
  "XMP-crs:FillLight"?: number;
  "XMP-aux:ImageNumber"?: number;
  "XMP-exifEX:BodySerialNumber"?: number;
  "XMP-exif:FocalPlaneResolutionUnit"?: string;
  "XMP-exif:FocalPlaneXResolution"?: number;
  "XMP-crs:PerspectiveHorizontal"?: number;
  "XMP-crs:ProcessVersion"?: number;
  "XMP-crs:ToneCurve"?: string[];
  "XMP-tiff:ImageWidth"?: number;
  "XMP-photoshop:ColorMode"?: string;
  "XMP-crs:Highlights2012"?: number;
  "XMP-crs:SaturationAdjustmentRed"?: number;
  "XMP-exif:CustomRendered"?: string;
  "XMP-crs:RedHue"?: number;
  "XMP-crs:LuminanceAdjustmentBlue"?: number;
  "XMP-photoshop:LegacyIPTCDigest"?: string;
  "XMP-crs:ParametricMidtoneSplit"?: number;
  "XMP-crs:LensProfileSetup"?: string;
  "XMP-crs:Blacks2012"?: number;
  "XMP-crs:Whites2012"?: number;
  "XMP-tiff:BitsPerSample"?: number[];
  "XMP-tiff:XResolution"?: number;
  "XMP-crs:CropUnit"?: string;
  "XMP-crs:ParametricLights"?: number;
  "XMP-exif:FileSource"?: string;
  "XMP-exif:FNumber"?: number;
  "XMP-crs:VignetteAmount"?: number;
  "XMP-exif:Contrast"?: string;
  "XMP-crs:SaturationAdjustmentAqua"?: number;
  "XMP-tiff:ResolutionUnit"?: string;
  "XMP-crs:SharpenEdgeMasking"?: number;
  "XMP-crs:ToneCurvePV2012Red"?: string[];
  "XMP-crs:Saturation"?: number;
  "XMP-exif:FocalLength"?: string;
  "XMP-crs:SplitToningHighlightHue"?: number;
  "XMP-crs:CropRight"?: number;
  "XMP-crs:HueAdjustmentMagenta"?: number;
  "XMP-crs:ToneCurveGreen"?: string[];
  "XMP-crs:HasSettings"?: boolean;
  "XMP-exif:SubjectDistanceRange"?: string;
  "XMP-crs:CropTop"?: number;
  "XMP-crs:ParametricHighlightSplit"?: number;
  "XMP-crs:HueAdjustmentBlue"?: number;
  "XMP-exifEX:LensModel"?: string;
  "XMP-crs:Defringe"?: number;
  "XMP-crs:Contrast"?: string;
  "XMP-crs:CameraProfileDigest"?: string;
  "XMP-crs:CropConstrainToWarp"?: number;
  "XMP-crs:SplitToningBalance"?: number;
  "XMP-tiff:SamplesPerPixel"?: number;
  "XMP-crs:ToneCurveName"?: string;
  "XMP-crs:ToneCurveName2012"?: string;
  "XMP-exif:ExposureMode"?: string;
  "XMP-crs:LuminanceNoiseReductionDetail"?: number;
  "XMP-crs:PaintBasedCorrections"?: XMPCRSPaintBasedCorrection[];
  "XMP-crs:HighlightRecovery"?: number;
  "XMP-tiff:PhotometricInterpretation"?: string;
  "XMP-aux:LensID"?: number;
  "XMP-tiff:YResolution"?: number;
  "XMP-exif:FocalLengthIn35mmFilm"?: string;
  "XMP-crs:Shadows2012"?: number;
  "XMP-exif:MaxApertureValue"?: number;
  "XMP-crs:AutoLateralCA"?: number;
  "XMP-exif:FocalPlaneYResolution"?: number;
  "XMP-crs:RawFileName"?: string;
  "XMP-exif:Sharpness"?: string;
  "XMP-crs:LuminanceAdjustmentOrange"?: number;
  "XMP-crs:SplitToningHighlightSaturation"?: number;
  "XMP-crs:Sharpness"?: number;
  "XMP-crs:CropBottom"?: number;
  "XMP-crs:SaturationAdjustmentGreen"?: number;
  "XMP-exif:ExposureTime"?: string;
  "XMP-exifEX:LensSpecification"?: number[];
  "XMP-crs:ParametricShadowSplit"?: number;
  "XMP-crs:LensManualDistortionAmount"?: number;
  "XMP-crs:Tint"?: string;
  "XMP-crs:ColorNoiseReductionDetail"?: number;
  "XMP-crs:SaturationAdjustmentPurple"?: number;
  "XMP-crs:SplitToningShadowSaturation"?: number;
  "XMP-crs:PerspectiveScale"?: number;
  "XMP-crs:Contrast2012"?: number;
  "XMP-exif:CFAPattern"?: XMPExifCFAPattern;
  "XMP-crs:ToneCurvePV2012Blue"?: string[];
  "XMP-crs:CameraProfile"?: string;
  "XMP-crs:HueAdjustmentGreen"?: number;
  "XMP-crs:SharpenDetail"?: number;
  "XMP-exif:ApertureValue"?: number;
  "XMP-crs:ParametricShadows"?: number;
  "XMP-crs:ToneCurveRed"?: string[];
  "XMP-crs:ParametricHighlights"?: number;
  "XMP-exif:ShutterSpeedValue"?: string;
  "XMP-crs:Clarity2012"?: number;
  "XMP-crs:SaturationAdjustmentYellow"?: number;
  "XMP-crs:Brightness"?: string;
  "XMP-crs:ToneCurvePV2012"?: string[];
  "XMP-crs:ToneCurveBlue"?: string[];
  "XMP-crs:LuminanceAdjustmentGreen"?: number;
  "XMP-crs:PerspectiveVertical"?: number;
  "XMP-crs:SplitToningShadowHue"?: number;
  "XMP-crs:LuminanceAdjustmentMagenta"?: number;
  "XMP-crs:GrainAmount"?: number;
  "XMP-crs:ParametricDarks"?: number;
  "XMP-exif:LightSource"?: string;
  "XMP-exif:DateTimeOriginal"?: string;
  "XMP-crs:LuminanceAdjustmentAqua"?: number;
  "XMP-exif:SceneCaptureType"?: string;
  "XMP-photoshop:ICCProfile"?: string;
  "XMP-crs:Shadows"?: number;
  "XMP-exif:ISOSpeedRatings"?: number[];
  "XMP-exif:PixelXDimension"?: number;
  "XMP-crs:CropWidth"?: number;
}

export enum XMPBextOriginator {
  AdobePremierePro20200Macin = "Adobe Premiere Pro 2020.0 (Macin",
  AdobePremiereProCC20190Wi = "Adobe Premiere Pro CC 2019.0 (Wi",
  ProTools = "Pro Tools",
}

export interface XMPCreatorAtomAEProjectLink {
  FullPath: string;
  RenderQueueItemID: number;
  RenderOutputModuleIndex: number;
  CompositionID: number;
}

export interface XMPCreatorAtomWindowsAtom {
  InvocationFlags: string;
  Extension: string;
  UncProjectPath?: string;
}

export interface XMPCRSPaintBasedCorrection {
  LocalLuminanceNoise: number;
  CorrectionAmount: number;
  LocalSaturation: number;
  CorrectionActive: boolean;
  LocalExposure: number;
  CorrectionMasks: CorrectionMask[];
  LocalBrightness: number;
  LocalToningSaturation: number;
  LocalTemperature: number;
  LocalContrast: number;
  LocalClarity: number;
  LocalShadows2012: number;
  LocalToningHue: number;
  LocalExposure2012: number;
  LocalMoire: number;
  What: string;
  LocalTint: number;
  LocalContrast2012: number;
  LocalHighlights2012: number;
  LocalSharpness: number;
  LocalClarity2012: number;
}

export interface CorrectionMask {
  MaskValue: number;
  Dabs: string[];
  Flow: number;
  CenterWeight: number;
  What: string;
  Radius: number;
}

export interface XMPExifCFAPattern {
  Columns: number;
  Values: number[];
  Rows: number;
}

export interface XMPExifFlash {
  Return: string;
  Function: boolean;
  Fired: boolean;
  Mode: string;
  RedEyeMode: boolean;
}

export enum XMPTiffMake {
  Canon = "CANON",
  NikonCorporation = "NIKON CORPORATION",
  Sony = "SONY",
  XMPTiffMakeSony = "Sony",
}

export enum XMPTiffModel {
  NikonD800 = "NIKON D800",
  PxwFs5 = "PXW-FS5",
  PxwFs7 = "PXW-FS7",
  PxwZ150 = "PXW-Z150",
  Xf305 = "XF305",
}

export interface XMPXmpNativeDigests {
  CanonXF: string;
}

export enum XMPXmpDMAudioCompressor {
  Lpcm = "LPCM",
  Lpcm24 = "LPCM24",
}

export enum XMPXmpDMCameraModel {
  SonyPXWFS7 = "Sony PXW-FS7",
  SonyPxwFs5 = "SONY PXW-FS5",
  SonyPxwZ150 = "SONY PXW-Z150",
}

export enum XMPXmpDMLogComment {
  The09138 = "0.9.138",
}

export interface XmpProjectRef {
  Type: string;
}

export interface XMPXmpDMTrack {
  FrameRate: FrameRate;
  TrackName: TrackName;
  TrackType: TrackType;
  Markers?: Marker[];
}

export enum FrameRate {
  F24000S1001 = "f24000s1001",
  F30000S1001 = "f30000s1001",
  F44100 = "f44100",
  F48000 = "f48000",
  F60000S1001 = "f60000s1001",
}

export interface Marker {
  Guid: string;
  CuePointParams: CuePointParam[];
  StartTime: number;
}

export interface CuePointParam {
  Value: string;
  Key: string;
}

export enum TrackName {
  CDTrackMarkers = "CD Track Markers",
  Comment = "Comment",
  CuePointMarkers = "CuePoint Markers",
  SubclipMarkers = "Subclip Markers",
}

export enum TrackType {
  Comment = "Comment",
  Cue = "Cue",
  InOut = "InOut",
  Track = "Track",
}

export enum XMPXmpDMVideoCompressor {
  AVC3840_2160_HPL51 = "AVC_3840_2160_HP@L51",
  AVC4096_2160_H422IPL51 = "AVC_4096_2160_H422IP@L51",
  AVC4096_2160_H422IPL52 = "AVC_4096_2160_H422IP@L52",
  Avc501920_1080_H422PL42 = "AVC50_1920_1080_H422P@L42",
  Mpeg2 = "MPEG2",
}

export enum XmpVideoFieldOrder {
  Progressive = "Progressive",
  Upper = "Upper",
}

export enum XMPXmpDMVideoFrameRateEnum {
  The2398P = "23.98p",
  The2997P = "29.97p",
  The5994P = "59.94p",
}

export interface XmpVideoFrameSize {
  W: number;
  H: number;
  Unit: Unit;
}

export enum Unit {
  Pixel = "pixel",
  Pixels = "pixels",
}

export enum XMPXmpDMVideoPixelAspectRatioEnum {
  The169 = "16:9",
  The256135 = "256:135",
}

export interface XMPWindowsAtom {
  InvocationFlags: string;
  Extension: string;
}
