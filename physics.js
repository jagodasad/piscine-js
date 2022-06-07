const x = (f,m) => f/m;

const y = (v,t) => v/t;

const z = (d,t) => (2*d)/(t*t);

function getAcceleration(obj) {
    if (!Number.isNaN(x(obj.f,obj.m))) {
        return x(obj.f,obj.m)
    } else if (!Number.isNaN(y(obj.Δv,obj.Δt))) {
        return y(obj.Δv,obj.Δt)   
    } else if (!Number.isNaN(z(obj.d,obj.t))) {
        return z(obj.d,obj.t)
    }

    return "impossible"
}