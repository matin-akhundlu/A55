using System;
using System.Collections.Generic;
using System.Text;

namespace Class
{
    class Class1
    {

        public int user { get; set; }
        public int ID { get; set; }
        public string Title { get; set; }
        public bool Completed { get; set; }

        public Class1(int A55)
        {
            this.ID = A55;
        }

        public override string ToString()
        {
            return "{\n"
                + $" \"user\":{user},\n" 
                +
                $" -------- \"ID\":{ID},\n"
                +
                $" -------- \"Title\":\"{Title}\",\n" 
                +
                $" -------- \"Completed\":{Completed},\n"
                +
                "}";

        }
    }

}