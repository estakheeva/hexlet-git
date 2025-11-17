const functions = [
  cb => cb(null),
  cb => cb(null, "one"),
  (r1, cb) => cb(null, r1, "two"),
  (r1, r2, cb) =>(null, r2, r1),
];

async.watrfall(functions, (err, ...result) => {
  assert.deepEqual(result[0], "two");
  assert.deepEqual(result[1], "one");
});
