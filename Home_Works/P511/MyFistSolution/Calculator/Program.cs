using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, c, d, e, f, m, n, t, k, p;

            a = 50;
            b = 5;
            e = 60;
            f = 10;
            m = 3;
            n = 17;
            k = 130;
            


            c = a + b;
            d = e - b;
            t = m * f - n;
            p = k / f;
            



            Console.WriteLine($"{a}+{b}={c}");
            Console.WriteLine($"{e}-{b}={d}");
            Console.WriteLine($"{m}*{f}-{n}={t}");
            Console.WriteLine($"{k}/{f}={p}");

            Console.ReadKey();

        }
    }
}
