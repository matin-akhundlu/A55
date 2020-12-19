using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, c, d, e, f, m, n, t, k, p;
            double g, s, r;

            a = 50;
            b = 5;
            e = 60;
            f = 10;
            m = 3;
            n = 17;
            k = 130;
            r = 13;
            s = 0.55;

            


            c = a + b;
            d = e - b;
            t = m * f - n;
            p = k / f;
            g = r + s * 1.0;



            Console.WriteLine($"{a}+{b}={c}");
            Console.WriteLine($"{e}-{b}={d}");
            Console.WriteLine($"{m}*{f}-{n}={t}");
            Console.WriteLine($"{k}/{f}={p}");
            Console.WriteLine($"{r}+{s}={g}");

            Console.ReadKey();

        }
    }
}
