import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";

const Pricing = () => {
  const planList = [
    { coverage: "1 State", price: "2000", name: "Basic" },
    { coverage: "3 States", price: "4000", name: "Standard" },
    { coverage: "All States", price: "20000", name: "Premium" },
  ];
  return (
    <MaxWidthWrapper>
      <div className="grid pb-10">
        <div
          id="back"
          className="absolute left-0 w-full bg-[var(--theme-color-cream-light)] h-1/3 -z-10"
        ></div>
        <h2 className="text-3xl text-center my-20"></h2>
        <div className="grid lg:grid-cols-3 text-center gap-16">
          {planList.map((plan) => {
            return (
              <>
                <div className="border sm:mx-10 rounded-xl bg-gray-50 py-5 shadow-xl">
                  <div className="border-b-2 text-3xl font-normal pb-5">
                    {plan.name + " Plan"}
                  </div>
                  <div className="text-3xl font-normal pt-5">
                    {"₹ " + plan.price}
                    <span className="text-lg"> + GST</span>
                    <p className="text-lg font-medium">Per Year</p>
                  </div>
                  <div className="py-10 flex flex-col gap-5">
                    <p>{plan.coverage}</p>
                    <p>Advance Search</p>
                    <span>
                      <p>All Private and</p>
                      <p>Government Tenders</p>
                    </span>
                    <p>24/7 support</p>
                    <p></p>
                  </div>
                  <div>
                    <Button>Subscribe</Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Pricing;
