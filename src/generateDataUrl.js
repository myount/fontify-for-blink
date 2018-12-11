import { getType as getMimeType } from 'mime';
import base64EncodeFile from './base64EncodeFile';

export default file =>
  `data:${getMimeType(file)};base64,${base64EncodeFile(file)}`;
