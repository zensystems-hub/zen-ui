export function numericFormat(
  value: number | string,
  maxDecimalPoint = 3,
): string {
  try {
    return Number(value).toLocaleString(undefined, {
      maximumFractionDigits: maxDecimalPoint,
    });
  } catch (e) {
    return '-';
  }
}

export function bpsSize(
  size: number | string | undefined | null,
  unit?: string,
  indices = 1000,
): string {
  let out;
  const byteLimit = indices;
  const kbLimit = Math.pow(indices, 2);
  const mbLimit = Math.pow(indices, 3);
  const gbLimit = Math.pow(indices, 4);
  if (size === undefined || size === null) {
    return '-';
  }
  size = Number(size);
  if (size === 0) {
    return '0';
  }
  if (size < indices) {
    if (size === 1) {
      out = '1 bps';
    } else {
      out = size.toFixed(1) + ` ${unit || 'bps'}`;
    }
  } else if (size < kbLimit) {
    out = Math.round((size * 10) / byteLimit) / 10 + ` K${unit || 'bps'}`;
  } else if (size < mbLimit) {
    out = Math.round((size * 10) / kbLimit) / 10 + ` M${unit || 'bps'}`;
  } else if (size < gbLimit) {
    out = Math.round((size * 10) / mbLimit) / 10 + ` G${unit || 'bps'}`;
  } else {
    out = Math.round((size * 10) / gbLimit) / 10 + ` T${unit || 'bps'}`;
  }
  return out;
}
