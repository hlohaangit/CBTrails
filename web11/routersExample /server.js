const srv= require("express")();

const teachRoute= require("./routes/teacher");
const studentRoute= require("./routes/student");

srv.use('/student', studentRoute);

srv.use('/teacher', teachRoute);

srv.listen(4567)