// // utils/readCSV.ts
// import * as fs from 'fs';
// import * as path from 'path';

// export function readCSV(filePath: string): Record<string, string>[] {
//   const fullPath = path.resolve(filePath);
//   const data = fs.readFileSync(fullPath, 'utf-8');
//   const lines = data.trim().split('\n');
//   const headers = lines[0].split(',');

//   return lines.slice(1).map(line => {
//     const values = line.split(',');
//     const row: Record<string, string> = {};
//     headers.forEach((header, index) => {
//       row[header.trim()] = values[index].trim();
//     });
//     return row;
//   });
// }


// utils/readCSV.ts
import * as fs from 'fs';
import * as path from 'path';

export function readCSV(filePath: string): Record<string, string>[] {
  const fullPath = path.resolve(filePath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  const lines = data.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());

  return lines.slice(1).map((line, lineIndex) => {
    const values = line.trim().split(',');
    const row: Record<string, string> = {};

    if (values.length !== headers.length) {
      console.warn(
        `Warning: Line ${lineIndex + 2} has ${values.length} values but expected ${headers.length}.`,
        line
      );
    }

    headers.forEach((header, index) => {
      row[header] = values[index] ? values[index].trim() : '';
    });

    return row;
  });
}
